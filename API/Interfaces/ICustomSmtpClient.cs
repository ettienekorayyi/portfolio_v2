using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MailKit;
using MailKit.Security;
using MimeKit;

namespace API.Interfaces
{
    public interface ICustomSmtpClient : IDisposable
    {
        void Connect(string host, int port = 0, SecureSocketOptions options = SecureSocketOptions.Auto, CancellationToken cancellationToken = default);
        void Authenticate(string userName, string password, CancellationToken cancellationToken = default);
        Task<string> SendAsync(MimeMessage message, CancellationToken cancellationToken = default, ITransferProgress progress = null);
        void Disconnect(bool quit, CancellationToken cancellationToken = default);
    }
}