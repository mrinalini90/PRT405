app.config= function ($routeProvider) {
    $routeProvider.
        when('/ViewProduct', {
            templateUrl: 'Product/ViewProduct'
        })
        .when('/Products', {
            templateUrl: 'Products/Index'
        });
}