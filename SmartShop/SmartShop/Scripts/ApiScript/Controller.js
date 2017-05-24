app.controller('SmartShopController',
    function ($scope,$location, SmartShopService) {
        getAll();


        function getAll() {
            var servCall = SmartShopService.getProducts();
            servCall.then(function(d) {
                    $scope.product = d.data;
                },
                function(error) {
                    $log.error('Oops! Something went wrong while fetching the data.' + error);
                });
        }

        $scope.getProductId = function(id) {
            var prod = id;
           // alert("Id is " + prod);
            getProductById(id);
        };

        function getProductById(id) {
            var servCall = SmartShopService.getProduct(id);
            servCall.then(function (d) {
                $scope.singleProduct = d.data;
                $scope.updateName = $scope.singleProduct.ProductName;
                $scope.updateCategory = $scope.singleProduct.ProductCategory;
                $scope.updateDescription = $scope.singleProduct.ProductDescription;
                $scope.updatePrice = $scope.singleProduct.ProductPrice;
                $("#ViewModal").modal();
                
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

        $scope.enableEdit = function() {
            $scope.disable = false;
            $scope.updateButton = true;
        };

        $scope.enableDelete = function () {
            $scope.deleteButton = true;
        };

        $scope.updateProduct = function () {
            alert("updated");
            alert("Name :" + $scope.product.userId);
            var prod = {
                ProductName: $scope.ProductName,
                ProductCategory: $scope.ProductCategory,
                ProductDescription: $scope.ProductDescription,
                ProductPrice: $scope.ProductPrice,
                UserId: $scope.product.userId
            };
            var addProduct = SmartShopService.AddProduct(prod);
            addProduct.then(function (d) {
                    getAll();
                },
                function (error) {
                    console.log('Oops! Something went wrong while saving the data.' + error.toString());
                });
        };


        $scope.deleteProduct = function() {};
    });