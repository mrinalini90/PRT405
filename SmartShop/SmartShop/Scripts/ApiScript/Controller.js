﻿app.controller('SmartShopController',
    function ($scope,$location, SmartShopService) {
        getAll();

        //get all product function
        function getAll() {
            var servCall = SmartShopService.getProducts();
            servCall.then(function(d) {
                    $scope.product = d.data;
                },
                function(error) {
                    $log.error('Oops! Something went wrong while fetching the data.' + error.data.ExceptionInformation);
                });
        }

        $scope.getProductId = function(id) {
            var prod = id;
            getProductById(id);
        };

        //get product by id function
        function getProductById(id) {
            var servCall = SmartShopService.getProduct(id);
            servCall.then(function (d) {
                $scope.singleProduct = d.data;
                $scope.updateId = $scope.singleProduct.ProductId;
                $scope.updateName = $scope.singleProduct.ProductName;
                $scope.updateCategory = $scope.singleProduct.ProductCategory;
                $scope.updateDescription = $scope.singleProduct.ProductDescription;
                $scope.updatePrice = $scope.singleProduct.ProductPrice;
                $("#ViewModal").modal();
                },
                function (error) {
                    $log.error('Oops! Something went wrong while fetching the Product' + error.data.ExceptionInformation);
                });
        }

        // add product function
        $scope.addProduct = function() {
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
                    console.log('Oops! Something went wrong while saving the data.' + error.data.ExceptionInformation);
                });
        };

        //View Update button
        $scope.enableEdit = function() {
            $scope.disable = false;
            $scope.updateButton = true;
        };

        //View Delete button
        $scope.enableDelete = function () {
            $scope.deleteButton = true;
        };

        //update function
        $scope.updateProduct = function () {
            var prod = {
                ProductId: $scope.updateId,
                ProductName: $scope.updateName,
                ProductCategory: $scope.updateCategory,
                ProductDescription: $scope.updateDescription,
                ProductPrice: $scope.updatePrice
            };
            var updateProduct = SmartShopService.UpdateProduct(prod);
            $scope.disable = true;
            $scope.updateButton = false;
            updateProduct.then(function () {
                alert("The data has been updated");

                    getAll();
                },
                function (error) {
                    console.log('Oops! Something went wrong while saving the data.' + error.data.ExceptionInformation);
                });
        };

        //delete function
        $scope.deleteProduct = function () {
            var id = $scope.updateId;
            var deleteProduct = SmartShopService.DeleteProduct(id);
            $scope.deleteButton = false;
            deleteProduct.then(function (d) {
                    getAll();
                },
                function (error) {
                    console.log('Oops! Something went wrong while saving the data.' + error.data.ExceptionInformation);
                });
        };
    });