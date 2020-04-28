import React from 'react';
import styles from './size.module.css';
import { RadioButton } from '../../ui/base/button/radio/Radio';
import text from './text';
import { InputChangeEvent } from '../../ui/types/events';
import { Label } from '../../ui/base/label/Label';
import { Link } from '../../ui/base/link/link';
import { BaseRoute } from '../../ui/routes/paths';

export const Size = () => {
  const [state, setState] = React.useState({
    size: text.large(),
  });

  const handleChange = React.useCallback((event: InputChangeEvent) => {
    setState({
      size: event.target.value,
    });
  }, [state.size]);

  return (
    <div className={styles.container}>
      <div>
        <h1>Choose pizza size</h1>
        <RadioButton
          value={text.small()}
          isSelected={state.size === text.small()}
          onChange={handleChange}
        >
          <Label text={text.small()}/>
        </RadioButton>
        <RadioButton
          value={text.meduim()}
          isSelected={state.size === text.meduim()}
          onChange={handleChange}
        >
          <Label text={text.meduim()}/>
        </RadioButton>
        <RadioButton
          value={text.large()}
          isSelected={state.size === text.large()}
          onChange={handleChange}
        >
          <Label text={text.large()}/>
        </RadioButton>
        <Link path={{ route: BaseRoute.CRUST }}>
          <button>OK</button>
        </Link>
      </div>
      <div>

      </div>
    </div>
  );
};