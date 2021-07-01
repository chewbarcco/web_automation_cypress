import * as HomePage from '../../page-functions/home/home.page'
import * as ConcourseAssert from '../../assertions/byConcourse/concourse.assert'
import * as ConcoursePage from '../../page-functions/byConcourse/concourse.page'


context("Cursos por concursos", function(){
    
    beforeEach(function () {
        cy.visit("https://www.estrategiaconcursos.com.br/")
    })

    it("Validar filtro por cursos na página de detalhes para cursos por Concursos", function(){

        HomePage.goToByConcoursePage()
        ConcoursePage.clickSpotlightConcourse()
        ConcoursePage.clickCoursesTab()
        ConcoursePage.typeOnFilter("Direito Civil p/ Receita Federal (Auditor Fiscal) 2021 - Pré-Edital")

        ConcourseAssert.verifyFilteredCourse("Direito Civil p/ Receita Federal (Auditor Fiscal) 2021 - Pré-Edital")

    })

})