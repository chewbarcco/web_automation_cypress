import * as ConcourseComp from '../../components/byConcourse/concourse.comp'

export const verifyFilteredCourse = (course) => {
    ConcourseComp.getFilteredCourse().should('contain', course)
}