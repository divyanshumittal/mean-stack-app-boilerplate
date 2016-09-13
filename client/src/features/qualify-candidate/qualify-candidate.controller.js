(function (angular) {
    'use strict';

    angular
        .module('app.qualifyCandidate')
        .controller('QualifyCandidateController', QualifyCandidateController);

    // @ngInject
    function QualifyCandidateController() {
        var vm = this;
        vm.isQualified = true;
        vm.checkValue = checkValue;

        vm.questions = [
            {
                text: 'Does the candidate currently have a valid H1B?',
                expectedAnswer: 1
            },
            {
                text: 'Does the current H1 expire within the next two months?',
                expectedAnswer: 0
            },
            {
                text: 'Has the Candidate been on H1 for more than 5 years?',
                expectedAnswer: 0
            },
            {
                text: 'Has anyone started this Candidates Green Card process yet?',
                expectedAnswer: 0
            },
            {
                text: 'Is the candidate currently engaged in project?',
                expectedAnswer: 1
            }
        ];

        function checkValue() {
            vm.isQualified = true;
            _.each(vm.questions, function (data) {
                if (data.submittedAnswer && data.expectedAnswer != data.submittedAnswer) {
                    vm.isQualified = false;
                    return;
                }
            });

            for (var i = 0; i < vm.questions.length; i++) {
                if (vm.questions[i].expectedAnswer == vm.questions[i].submittedAnswer) {
                    vm.isSureQualified = true;
                } else {
                    vm.isSureQualified = false;
                    return;
                }
            }
        }

    }
}(angular));