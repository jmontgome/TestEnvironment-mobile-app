namespace API.Options
{
    public static class CORSOptions
    {
        public static string CORSOptionsKey = "CORSOptions";
        public static string[] AllowedOrigins = { "http://localhost:8100", "http://localhost:4200" };
        
        public static string BuildOptions(WebApplicationBuilder builder)
        {            
            builder.Services.AddCors(options =>
            {
                options.AddPolicy(name: CORSOptionsKey,
                    policy =>
                    {
                        policy.WithOrigins(AllowedOrigins)
                        .AllowAnyHeader()
                        .AllowAnyMethod()
                        .AllowCredentials();
                    });
            });

            return CORSOptionsKey;
        }
    }
}
