using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PersonAPI.Data;
using PersonAPI.Models;

namespace PersonAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PersonController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Person>>> GetAll()
        {
            return await _context.Person.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Person>> Get(int id)
        {
            var person = await _context.Person.FindAsync(id);

            if (person == null)
                return NotFound();

            return person;
        }

        [HttpPost]
        public async Task<ActionResult<Person>> Post(Person person)
        {
            _context.Person.Add(person);
            await _context.SaveChangesAsync();

            return Ok(person);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Person person)
        {
            if (id != person.Id)
                return BadRequest();

            _context.Entry(person).State = EntityState.Modified;

            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var person = await _context.Person.FindAsync(id);

            if (person == null)
                return NotFound();

            _context.Person.Remove(person);

            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}