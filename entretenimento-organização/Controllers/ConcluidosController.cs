using entretenimento_organização.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace entretenimento_organização.Controllers
{
    public class ConcluidosController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public ConcluidosController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Filmes()
        {
            return View();
        }

        public IActionResult Series()
        {
            return View();
        }

        public IActionResult Livros()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}