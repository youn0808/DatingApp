using System;

namespace API.Entities;

public class AppUser
{
    public int Id { get; set; }
    public string? UserName { get; set; } =""; // ? is make the property optional 
    //public required string UserName2 { get; set; }

}
