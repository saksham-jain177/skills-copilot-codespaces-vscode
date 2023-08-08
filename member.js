function skillsMember(){
    return{
        restrict:'E',
        templateURL:'modules/skills/views/member.html',
        controller:'SkillsMemberController',
        controllerAs:'vm',
        scope:{
            member:'='
        }
    };
} 