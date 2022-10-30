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
using MailKit;
using System.Net.Mail;
using System.Diagnostics;

namespace API.Services
{
    public class EmailServices : IEmailServices
    {
        private readonly EmailSettings _emailSettings;
        private ISmtpClient _smtpClient;
        private MimeMessage _email;
        private TextPart _textPart;

        public EmailServices(IOptions<EmailSettings> emailSettings, 
            ISmtpClient smtpClient, MimeMessage email, TextPart textPart)
        {
            _emailSettings = emailSettings.Value;
            _smtpClient = smtpClient;
            _email = email;
            _textPart = textPart;
        }

        public async Task SendEmailAsync(Email emailRequest)
        {
            try
            {
                _email.Sender = MailboxAddress.Parse(_emailSettings.Email);
                _email.To.Add(new MailboxAddress(emailRequest.Name, emailRequest.ToEmail));
                _email.Subject = emailRequest.Subject;
                _textPart.Text = emailRequest.Message;
                _email.Body = _textPart;

                using (var client = _smtpClient)
                {
                    client.Connect(_emailSettings.Host,_emailSettings.Port);
                    client.Authenticate(_emailSettings.Email,_emailSettings.Password);
                    await client.SendAsync(_email);
                    client.Disconnect(true);
                }
            }
            catch (SmtpFailedRecipientsException smtpFresx) 
            {
                Trace.WriteLine(smtpFresx.Message);
            }
            catch (SmtpFailedRecipientException smtpFrex)
            {
                Trace.WriteLine(smtpFrex.Message);
            }
            catch(Exception e)
            {
                Trace.WriteLine(e.Message);
            }
        }

    }
}