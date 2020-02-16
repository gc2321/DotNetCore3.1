using Application.Common.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Http
{
    public class HttpService: IHttpService
    {
        private HttpClient _client;
        
        public HttpService(HttpClient client)
        {
            _client = client;
        }
       
        public async Task<IActionResult> Get()
        {
            var response = await _client.GetAsync("https://httpbin.org/get");
            if (response.IsSuccessStatusCode)
            {
                
            }
            return null;
        }
    }
}
