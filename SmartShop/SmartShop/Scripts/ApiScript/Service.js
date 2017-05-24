app.service("SmartShopService", function ($http) {
    this.getProducts = function() {
        return $http.get("api/Products");
    };

    this.getProduct = function(id) {
        return $http.get("api/Products/"+id);
    };

    this.AddProduct = function(prod) {
        return $http(
            {
                method: 'post',
                data: prod,
                dataType: 'json',
                url: 'api/AddProduct'
            });
    };

}); 