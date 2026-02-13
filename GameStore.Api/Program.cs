using GameStore.Api.Endpoints;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello from .NET Server!");

app.MapGamesEndpoints();
app.Run();
