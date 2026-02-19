using GameStore.Api.Data;
using GameStore.Api.Endpoints;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddValidation();

builder.AddGameStoreDb();

var app = builder.Build();

app.MapGet("/", () => "Hello from .NET Server!");

app.MapGamesEndpoints();
app.MapGenresEndpoints();

app.MigrateDb();

app.Run();
