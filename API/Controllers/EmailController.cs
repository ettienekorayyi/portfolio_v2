using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using API.Models;
using API.Interfaces;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmailController : ControllerBase
    {
        private readonly IEmailServices _emailServices;

        public EmailController(IEmailServices emailServices)
        {
            /*
            EmailSettings services = new EmailSettings()
            {
                Email = "contactstvmailer@gmail.com",
                DisplayName = "Stephen Corral",
                Password = "kubbcxhzykgvmusb",
                Host = "smtp.gmail.com",
                Port = 587
            };
            */
            _emailServices = emailServices;
        }

        [HttpGet(Name = "GetEmail")]
        public IEnumerable<string> GetEmail()
        {
            List<string> emails = new List<string>()
            {
                "Email 1",
                "Email 2",
                "Email 3",
            };

            return emails;
        }

        [HttpPost(Name = "SendEmail")]
        public async Task<IActionResult> SendEmail([FromBody] Email emailRequest) //FromForm 
        {
            bool emailSent = await _emailServices.SendEmailAsync(emailRequest);
            
            if(emailSent == true) return Ok();
            else return BadRequest();
        }

    }
}

