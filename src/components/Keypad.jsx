import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Key from './Key';

export default class Keypad extends Component {
  render() {
    const keyPress = this.props.keyPress;
    const x = <span>&#x1D4B3;</span>;
    const inv = <sup>-1</sup>;
    const pow2 = <sup>2</sup>;
    const pow3 = <sup>3</sup>;

    return (
      <div>
        <div className="keypad-row-sm">
          <Key className="sm-button" Tag={[x, inv]} keyLog="^-1" math="inv" keyPress={keyPress} />
          <Key className="sm-button" Tag="&radic;" keyLog="&radic;(" math="sqrt" keyPress={keyPress} />
          <Key className="sm-button" Tag={[x, pow2]} keyLog="^2" math="sqr" keyPress={keyPress} />
          <Key className="sm-button" Tag="^" keyLog="^" math="power" keyPress={keyPress} />
          <Key className="sm-button" Tag="log" keyLog="log(" math="log" keyPress={keyPress} />
          <Key className="sm-button" Tag="ln" keyLog="ln(" math="log" keyPress={keyPress} />
        </div>
        <div className="keypad-row-sm">
          <Key className="sm-button" keyLog="-" Tag="(&minus;)" math="sub" keyPress={keyPress} />
          <Key className="sm-button" keyLog="^3" Tag={[x, pow3]} math="power" keyPress={keyPress} />
          <Key className="sm-button" keyLog="" Tag="hyp" math="log" keyPress={keyPress} />
          <Key className="sm-button" keyLog="sin(" Tag="sin" math="trig" keyPress={keyPress} />
          <Key className="sm-button" keyLog="cos(" Tag="cos" math="trig" keyPress={keyPress} />
          <Key className="sm-button" keyLog="tan(" Tag="tan" math="trig" keyPress={keyPress} />
        </div>
        <div className="keypad-row-sm">
          <Key className="sm-button" keyLog="" Tag="RCL" math="" keyPress={keyPress} />
          <Key className="sm-button" keyLog="" Tag="ENG" math="" keyPress={keyPress} />
          <Key className="sm-button" keyLog="(" Tag="(" math="prnths" keyPress={keyPress} />
          <Key className="sm-button" keyLog=")" Tag=")" math="prnths" keyPress={keyPress} />
          <Key className="sm-button" keyLog="" Tag="," math="log" keyPress={keyPress} />
          <Key className="sm-button" keyLog="" Tag="M+" math="log" keyPress={keyPress} />
        </div>
        <div className="keypad-row">
          <Key Tag="1" keyLog="1" math="number" keyPress={keyPress} />
          <Key Tag="2" keyLog="2" math="number" keyPress={keyPress} />
          <Key Tag="3" keyLog="3" math="number" keyPress={keyPress} />
          <Key className="orange-button" Tag="DEL" math="delete" keyPress={keyPress} />
          <Key className="orange-button" Tag="AC" math="clear" keyPress={keyPress} />
        </div>
        <div className="keypad-row">
          <Key Tag="4" keyLog="4" math="number" keyPress={keyPress} />
          <Key Tag="5" keyLog="5" math="number" keyPress={keyPress} />
          <Key Tag="6" keyLog="6" math="number" keyPress={keyPress} />
          <Key Tag="&times;" keyLog="&times;" math="multiply" keyPress={keyPress} />
          <Key Tag="&divide;" keyLog="&divide;" math="divide" keyPress={keyPress} />
        </div>
        <div className="keypad-row">
          <Key Tag="7" keyLog="7" math="number" keyPress={keyPress} />
          <Key Tag="8" keyLog="8" math="number" keyPress={keyPress} />
          <Key Tag="9" keyLog="9" math="number" keyPress={keyPress} />
          <Key Tag="+" keyLog="+" math="sum" keyPress={keyPress} />
          <Key Tag="&minus;" keyLog="-" math="subtract" keyPress={keyPress} />
        </div>
        <div className="keypad-row">
          <Key Tag="0" keyLog="0" math="log" keyPress={keyPress} />
          <Key Tag="." keyLog="." math="comma" keyPress={keyPress} />
          <Key Tag="EXP" keyLog="E" math="exponent" keyPress={keyPress} />
          <Key Tag="Ans" keyLog="Ans" math="ans" keyPress={keyPress} />
          <Key Tag="=" math="equals" keyPress={keyPress} />
        </div>
      </div>
    );
  }
}

Keypad.PropTypes = {
  keyPress: PropTypes.func,
};
