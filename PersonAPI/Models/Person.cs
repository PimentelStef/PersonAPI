namespace PersonAPI.Models
{
    public class Person
    {
        public int Id { get; set; }

        public string LastName { get; set; } = string.Empty;

        public string FirstName { get; set; } = string.Empty;

        public string Address { get; set; } = string.Empty;
    }
}