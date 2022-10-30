using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Moq;
using API.Services;
using API.Models;
using MimeKit;
using MailKit.Net.Smtp;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using API.Interfaces;
using MailKit;
using MailKit.Security;

namespace API.Tests.Services
{
    public class EmailServicesTests
    {
        Mock<ISmtpClient> _smtp;
        Mock<MimeMessage> _email;
        Mock<TextPart> _textPart;
        IOptions<EmailSettings> _settings;
        Email _emailRequest;
        EmailServices _emailService;

        public EmailServicesTests()
        {
            _smtp = new Mock<ISmtpClient>();
            _email = new Mock<MimeMessage>();
            _textPart = new Mock<TextPart>();

            _settings = Options.Create(new EmailSettings()
            {
                Email = "contactstvmailer@gmail.com",
                DisplayName = "Stephen Corral",
                Password = "kubbcxhzykgvmusb",
                Host = "smtp.gmail.com",
                Port = 587
            });
            _emailRequest = new Email()
            {
                Name = "Stephen",
                ToEmail = "corralstephenmelben@gmail.com",
                Subject = "Test",
                Message = "Lorem Ipsum"
            };

            _emailService = new EmailServices
            (
                _settings, 
                _smtp.Object, 
                _email.Object, 
                _textPart.Object
            );
        }


        [Fact]
        public async void SendEmailAsync_WhenCalled_VerifySendAsync()
        {
            _smtp.Setup(s => s.SendAsync(It.IsAny<MimeMessage>(), It.IsAny<CancellationToken>(), It.IsAny<ITransferProgress>()));
            _smtp.Setup(s => s.Connect(It.IsAny<string>(), It.IsAny<int>(), It.IsAny<SecureSocketOptions>(), It.IsAny<CancellationToken>()));
            _smtp.Setup(s => s.Authenticate(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<CancellationToken>()));

            await _emailService.SendEmailAsync(_emailRequest);

            _smtp.Verify(e => e.Connect(It.IsAny<string>(), It.IsAny<int>(), It.IsAny<SecureSocketOptions>(), It.IsAny<CancellationToken>()));
            _smtp.Verify(e => e.Authenticate(It.IsAny<string>(), It.IsAny<string>(), It.IsAny<CancellationToken>()));
            _smtp.Verify(e => e.SendAsync(It.IsAny<MimeMessage>(), It.IsAny<CancellationToken>(), It.IsAny<ITransferProgress>()), Times.Once());
        }

        // Test for invalid result
    }
}