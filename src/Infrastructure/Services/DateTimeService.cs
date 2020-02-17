using Application.Common.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace Infrastructure.Services
{ 
    public class DateTimeService : IDateTime
    {
        public DateTime Now => DateTime.Now;
    }
}
