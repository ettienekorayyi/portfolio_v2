using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Interfaces;
using API.Models;
using Microsoft.Extensions.Options;
using MailKit.Net.Smtp;
//using MailKit;
using MimeKit;
using MailKit.Security;

namespace API.Services
{
    public class EmailServices : IEmailServices
    {
        private readonly EmailSettings _emailSettings;

        public EmailServices(IOptions<EmailSettings> emailSettings)
        {
            _emailSettings = emailSettings.Value;
        }

        public async Task SendEmailAsync(Email emailRequest)
        {
            MimeMessage email = new MimeMessage();
            email.Sender = MailboxAddress.Parse(_emailSettings.Email);
            email.To.Add(new MailboxAddress(emailRequest.Name, emailRequest.ToEmail));
            email.Subject = emailRequest.Subject;
            email.Body = new TextPart()
            {
                Text = emailRequest.Message
            };

            using (var client = new SmtpClient()) //
            {
                client.Connect
                (
                    _emailSettings.Host,
                    _emailSettings.Port
                );

                client.Authenticate
                (
                    _emailSettings.Email, 
                    _emailSettings.Password
                );

                await client.SendAsync(email);
                client.Disconnect(true);
            }
        }
    }
}