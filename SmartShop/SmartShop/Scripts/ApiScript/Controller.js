app.controller('SmartShopController',
    function ($scope, SmartShopService) {
        getAll();


        function getAll() {
            var servCall = SmartShopService.getProducts();
            servCall.then(function(d) {
                    $scope.product = d.data;
                },
                function(error) {
                    $log.error('Oops! Something went wrong while fetching the data.' + error);
                });
        };

        $scope.getProductId = function () {
            var prod = $scope.ProductID;
            if (prod === null) {
                debug.WriteLine("Id empty");
            } else {
                alert("Id is " + prod);
            }
            alert("Id is " + prod);
        };

        function getProductById(id) {
            var servCall = SmartShopService.getProduct(id);
            servCall.then(function (d) {
                    $scope.product = d.data;
                },
                function (error) {
                    $log.error('Oops! Something went wrong while fetching the Product' + error);
                });
        }

        $scope.addProduct = function() {
            alert("Added");
            alert("Name :" + $scope.product.userId);
            var prod = {
                ProductName: $scope.ProductName,
                ProductCategory: $scope.ProductCategory,
                ProductDescription: $scope.ProductDescription,
                ProductPrice: $scope.ProductPrice,
                UserId: $scope.product.userId
            };
            var addProduct = SmartShopService.AddProduct(prod);
            addProduct.then(function(d) {
                    getAll();
                },
                function(error) {
                    console.log('Oops! Something went wrong while saving the data.' + error.toString());
                });
        };

    });