using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace CoreWebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ItemsController : ControllerBase
    {

        //Tüm liste içeriğini getirir
        [HttpGet]
        public async Task<Content> GetListItems(string itemId, string language)
        {
            using (WebClient wc = new WebClient())
            {
                var jsonStr = wc.DownloadString("http://localhost:85/" + itemId + "_" + language + ".json");
                return await Task.FromResult(new Content { Data = jsonStr });
            }
        }

        //detay sayfası içeriğini getirir.
        public async Task<Content> GetItemById(string itemId, string language)
        {
            using (WebClient wc = new WebClient())
            {
                var jsonStr = wc.DownloadString("http://localhost:85/" + itemId + "_" + language + ".json");
                return await Task.FromResult(new Content { Data = jsonStr });
            }
        }


        //Sayfa numarası 1'den başlar.
        //Listeleme sayfaları için kullanılır.
        public async Task<Content> GetListItemsWithPaging(string itemId, int page, int pageSize, string searchTerm, string language)
        {
            using (WebClient wc = new WebClient())
            {
                var jsonStr = wc.DownloadString("http://localhost:85/" + itemId + "_" + language + ".json");
                return await Task.FromResult(new Content { Data = jsonStr });
            }
        }
    }
}
