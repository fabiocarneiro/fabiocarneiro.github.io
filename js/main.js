angular.module('curriculo', ['ngMaterial', 'angularMoment'])
    .filter("reverse", function () {
        return function (input) {
            var result = "";
            input = input || "";
            for (var i = 0; i < input.length; i++) {
                result = input.charAt(i) + result;
            }
            return result;
        };
    })
    .filter("negative", function () {
        return function (input) {
            return input * -1;
        };
    })
    .controller('HomeController', ['$scope', function ($scope) {

        $scope.info = {
            'name': 'Fabio Carneiro',
            'birthDate': '1988-11-26',
            'email': 'moc.liamg@scehaf',
            'telephone': '810620235155+',
            'mobile': '1216808995155+'
        };

        $scope.experience = [
            {
                'companyName': 'Squid Fácil',
                'role': 'CTO',
                'fromDate': '2014-09-01',
                'toDate': '2015-05-08'
            },
            {
                'companyName': 'Squid Fácil',
                'role': 'PHP Developer',
                'fromDate': '2013-02-01',
                'toDate': '2014-09-01'
            },
            {
                'companyName': 'DHGWEB',
                'role': 'PHP Developer',
                'fromDate': '2012-01-02',
                'toDate': '2012-12-03'
            },
            {
                'companyName': 'SorocabaCom',
                'role': 'PHP Developer',
                'fromDate': '2010-05-10',
                'toDate': '2010-12-01'
            },
            {
                'companyName': 'Ministério das Relações Exteriores',
                'role': 'Intern',
                'fromDate': '2008-05-01',
                'toDate': '2008-08-01'
            }
        ];

        $scope.education = [
            {
                'schoolName': 'Computer Science @Universidade de Sorocaba',
                'course': 'Bachelors'
            },
            {
                'schoolName': 'Computer Science @IESB',
                'course': 'Incomplete'
            },
            {
                'schoolName': 'High School @Instituto Superior de Educação do Rio de Janeiro',
                'course': 'High School grade'
            }
        ];

        $scope.language = [
            {
                'course': 'English @Embassy Ces',
                'place': 'Auckland - New Zealand',
                'grade': 'Upper Intermediate'
            },
            {
                'course': 'English @Casa Thomas Jefferson',
                'place': 'Brasilia, DF - Brasil',
                'grade': 'Intermediate'
            }
        ];

        $scope.opensourceContributions = [
            {
                'projectName': 'Zend Framework 2',
                'status': '8 merged, 1 open, 9 total',
                'description': 'Improved MVC Controller error handling, refactored some InputFilter classes'
            },
            {
                'projectName': 'Doctrine 2 (common + DoctrineModule + DoctrineORMModule)',
                'status': '2 merged, 3 open, 5 total',
                'description': 'Minor fixes, added embeddables support in Doctrine Hydrator'
            },
            {
                'projectName': 'DoctrineMongoODMModule',
                'status': '3 merged, 0 open, 3 total',
                'description': 'Composer settings, factory for Doctrine Hydrator to make DocumentManager default'
            },
            {
                'projectName': 'TwbBundle',
                'status': '4 merged, 1 open, 5 total',
                'description': 'Module that add Twitter Bootstrap styling to ZF2 Forms out of the box'
            },
            {
                'projectName': 'Piwik',
                'status': '1 merged, 1 open, 2 total',
                'description': 'Major opensource analytics platform. Fixes and best practices discussion'
            },
            {
                'projectName': 'DoctrineMoneyModule',
                'status': 'maintainer',
                'description': 'Created this module that connects mathiasverraes/money with ZF2'
            },
            {
                'projectName': 'RepositoryManager',
                'status': 'maintainer',
                'description': 'Simple service that stores repositories of different types'
            },
            {
                'projectName': 'This Resume',
                'status': 'maintainer',
                'description': 'This Resume is opensource and you can use it by forking fabiocarneiro.github.io repository into yourusername.github.io, and modifying the main.js info'
            }
        ];

        $scope.technologies = [
            {
                'name': 'PHP',
                'level': 95
            },
            {
                'name': 'Zend Framework 2',
                'level': 90
            },
            {
                'name': 'Doctrine',
                'level': 85
            },
            {
                'name': 'Test Driven Development',
                'level': 85
            },
            {
                'name': 'Domain Driven Design',
                'level': 35
            },
            {
                'name': 'SOLID Principles',
                'level': 80
            },
            {
                'name': 'Design Patterns',
                'level': 75
            },
            {
                'name': 'Microservice Architeture',
                'level': 25
            },
            {
                'name': 'Semantic Versioning',
                'level': 85
            },
            {
                'name': 'MySQL',
                'level': 80
            },
            {
                'name': 'MongoDB',
                'level': 50
            },
            {
                'name': 'Git',
                'level': 90
            },
            {
                'name': 'Composer',
                'level': 90
            },
            {
                'name': 'Webservices',
                'level': 80
            },
            {
                'name': 'Apigility',
                'level': 70
            },
            {
                'name': 'Amazon Web Services',
                'level': 50
            },
            {
                'name': 'HTML',
                'level': 95
            },
            {
                'name': 'CSS',
                'level': 90
            },
            {
                'name': 'Javascript',
                'level': 70
            },
            {
                'name': 'Jquery',
                'level': 70
            },
            {
                'name': 'AngularJS',
                'level': 60
            },
            {
                'name': 'Angular Material',
                'level': 55
            },
            {
                'name': 'Linux',
                'level': 90
            },
            {
                'name': 'Windows',
                'level': 80
            },
            {
                'name': 'Scrum',
                'level': 40
            },
            {
                'name': 'Magento',
                'level': 40
            },
            {
                'name': 'Opencart',
                'level': 50
            },
            {
                'name': 'Photoshop',
                'level': 50
            },
            {
                'name': 'Java',
                'level': 20
            },
            {
                'name': 'ASP.NET',
                'level': 10
            }
        ];
    }]);
