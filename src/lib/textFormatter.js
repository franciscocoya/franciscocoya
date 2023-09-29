import { JOB_STATUS, COLOR_PALETTE } from './constants.js'

/**
 * Output format: 'Jan 2019 - Present'
 *
 * @param {*} dateStart
 * @param {*} dateFinish
 * @param {*} status If status is 'finished', then output will be 'Jan 2019 - Dec 2019'
 * @returns
 */
const formatCvExperienceDates = (dateStart, dateFinish, status) => {
  return status === JOB_STATUS.current
    ? `${dateStart} - Present`
    : `${dateStart} - ${dateFinish}`
}

/**
 * Print message to console with style.
 * 
 * @param {*} message Output message to console
 */
const getStylizedConsoleLogMessage = (message) => {
  const fontStyle = [
    `color: ${COLOR_PALETTE.light}`,
    `background-color: ${COLOR_PALETTE.primary}`,
    'padding: 1rem 2rem',
    'font-size: 3rem'
  ].join(';')

  console.log(`%c ${message}`, fontStyle)
}

export { formatCvExperienceDates, getStylizedConsoleLogMessage }
