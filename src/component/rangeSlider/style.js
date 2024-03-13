import Styled from 'styled-components';

const RangeWrapper = Styled.div`
    margin-bottom:59px;

.slider {
  position: relative;
  width: 200px;
}

.slider__track,
.slider__range,
.slider__left-value,
.slider__right-value {
  position: absolute;
}

.slider__track,
.slider__range {
  border-radius: 8px;
  height: 4px;
}

.slider__track {
  background-color: #ced4da;
  width: 100%;
  z-index: 1;
}

.slider__range {
  background-color: ${({ theme }) => theme['link-color']};
  z-index: 2;
}

.slider__left-value,
.slider__right-value {
  color: #dee2e6;
  font-size: 12px;
  margin-top: 20px;
}

.slider__left-value {
    left: 22px;
    top: -8px;
    color:${({ theme }) => theme['secondary-color']};
    font-size:11px
}

.slider__right-value {
    right: 23px;
    top: -8px;
    color:${({ theme }) => theme['secondary-color']};
    font-size:11px;

}

/* Removing the default appearance */
.thumb,
.thumb::-webkit-slider-thumb {
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
}

.thumb {
  pointer-events: none;
  position: absolute;
  height: 0;
  width: 200px;
  outline: none;
}

.thumb--left {
  z-index: 3;
}

.thumb--right {
  z-index: 4;
}

/* For Chrome browsers */
.thumb::-webkit-slider-thumb {
  background-color:${({ theme }) => theme['white-color']} ;
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 1px 1px #ced4da;
  cursor: pointer;
  border:2px solid  ${({ theme }) => theme['link-color']};
  height: 12px;
  width: 12px;
  margin-top: 4px;
  pointer-events: all;
  position: relative;
}

/* For Firefox browsers */
.thumb::-moz-range-thumb {
  background-color: #f1f5f7;
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 1px 1px #ced4da;
  cursor: pointer;
  height: 18px;
  width: 18px;
  margin-top: 4px;
  pointer-events: all;
  position: relative;
}
.label{
    font-size:${({ theme }) => theme['base-font-size']};
    font-weight:${({ theme }) => theme['base-font-weight']};
}
`
export { RangeWrapper }
