import React from 'react';
import styles from './crust.module.css';
import { RadioButton } from '../../ui/base/button/radio/Radio';
import text from './text';
import { Label } from '../../ui/base/label/Label';
import { InputChangeEvent } from '../../ui/types/events';
import { Link } from '../../ui/base/link/link';
import { BaseRoute } from '../../ui/routes/paths';

export const Crust = () => {
  const [state, setState] = React.useState({
    crust: text.thick(),
  });

  const handleChange = React.useCallback((event: InputChangeEvent) => {
    setState({
      crust: event.target.value,
    });
  }, [state.crust]);

  return (
    <div className={styles.container}>
      <div>
        <h1>Choose pizza crust</h1>
        <RadioButton
          value={text.thick()}
          isSelected={state.crust === text.thick()}
          onChange={handleChange}
        >
          <Label text={text.thick()}/>
        </RadioButton>
        <RadioButton
          value={text.thin()}
          isSelected={state.crust === text.thin()}
          onChange={handleChange}
        >
          <Label text={text.thin()}/>
        </RadioButton>
        <Link path={{ route: BaseRoute.TOPPINGS }}>
          <button>OK</button>
        </Link>
      </div>
    </div>
  );
};