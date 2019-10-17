app.constant("rutas", (function() {
	var appBaseUrl = "#";
	return {
		appBaseUrl : appBaseUrl,
        home : "/",
        banda : "/banda",
        discografia : "/discografia",
        contacto : "/contacto",
        obituario : "/obituario",
		login : "/login",
		logout : "/logout",
		dashboard : "/dashboard",
		tienda: "/tienda",
		compra: "/compra"
	}
})());

app.constant("api", (function() {
	var baseUrl = "http://localhost:3000/api";
	return {
		baseUrl : baseUrl
	}
})());