/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import PropTypes from 'prop-types'
import { defaultMargin, defaultMotionDamping, defaultMotionStiffness } from '../../../defaults'
import { marginPropType, scalePropType } from '../../../props'
import { DIRECTION_HORIZONTAL, DIRECTION_VERTICAL } from '../../../constants/directions'

const { number, string, bool, func, shape, oneOf, oneOfType, instanceOf, arrayOf } = PropTypes

/**
 * Calendar components propTypes.
 *
 * @type {object}
 */
export const calendarPropTypes = {
    width: number.isRequired,
    height: number.isRequired,
    margin: marginPropType,
    from: oneOfType([string, instanceOf(Date)]).isRequired,
    to: oneOfType([string, instanceOf(Date)]).isRequired,
    data: arrayOf(
        shape({
            day: string.isRequired,
            value: number.isRequired,
        })
    ).isRequired,
    onDayClick: func.isRequired,
    direction: oneOf([DIRECTION_HORIZONTAL, DIRECTION_VERTICAL]),
    colorScale: scalePropType.isRequired,
    emptyColor: string.isRequired,

    // years
    yearSpacing: number.isRequired,
    yearLegendOffset: number.isRequired,

    // days
    daySpacing: number.isRequired,
    dayBorderWidth: number.isRequired,
    dayBorderColor: string.isRequired,

    // months
    monthBorderWidth: number.isRequired,
    monthBorderColor: string.isRequired,
    monthLegendOffset: number.isRequired,

    // transitions
    animate: bool.isRequired,
    motionStiffness: number.isRequired, // react-motion
    motionDamping: number.isRequired, // react-motion
}

/**
 * Calendar components defaultProps.
 *
 * @type {object}
 */
export const calendarDefaultProps = {
    margin: defaultMargin,
    direction: DIRECTION_HORIZONTAL,
    onDayClick: () => {},
    emptyColor: '#fff',

    // years
    yearSpacing: 30,
    yearLegendOffset: 10,

    // days
    daySpacing: 0,
    dayBorderWidth: 1,
    dayBorderColor: '#000',

    // months
    monthBorderWidth: 2,
    monthBorderColor: '#000',
    monthLegendOffset: 6,

    // motion
    animate: false,
    motionStiffness: defaultMotionStiffness, // react-motion
    motionDamping: defaultMotionDamping, // react-motion
}
