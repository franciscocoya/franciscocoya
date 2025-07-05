import { JOB_STATUS } from './constants.js'

/**
 * Output format: 'Jan 2019 - Present'
 *
 * @param {*} dateStart
 * @param {*} dateFinish
 * @param {*} status If status is 'finished', then output will be 'Jan 2019 - Dec 2019'
 * @returns
 */
const formatCvExperienceDates = (dateStart, dateFinish, status) => {
  if(!dateStart || !dateFinish) return "";
  
  return status === JOB_STATUS.current
    ? `${dateStart} - Present`
    : `${dateStart} - ${dateFinish}`
}

export { formatCvExperienceDates }
