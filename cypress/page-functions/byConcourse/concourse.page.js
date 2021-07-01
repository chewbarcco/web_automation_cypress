import * as ConcourseComp from '../../components/byConcourse/concourse.comp'

export const clickSpotlightConcourse = () => ConcourseComp.getSpotlightConcourse().click()

export const clickCoursesTab = () => ConcourseComp.getCoursesTab().click()

export const typeOnFilter = (course) => ConcourseComp.getFilter().type(course)