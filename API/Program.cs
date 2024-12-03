using API.Extensions;
using API.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddApplicationServices(builder.Configuration);
builder.Services.AddIdentityServices(builder.Configuration);

var app = builder.Build();

app.UseCors(x=>x.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:4200","http://localhost:4200"));

//middle ware

app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();


app.Run();
