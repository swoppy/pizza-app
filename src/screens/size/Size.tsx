import React from 'react';
import styles from './size.module.css';
import { RadioButton } from '../../ui/base/input/radio/Radio';
import text from './size_text';
import { InputChangeEvent } from '../../ui/types/events';
import { Label } from '../../ui/base/label/Label';
import { Link } from '../../ui/base/link/link';
import { BaseRoute } from '../../ui/routes/paths';
import { observer } from 'mobx-react';
import { PizzaSize } from './size_store';

type BaseSizeProps = {
  store: PizzaSize;
};

const BaseSize = observer(({ store }: BaseSizeProps) => {
  const handleChange = React.useCallback((event: InputChangeEvent) => {
    store.setSize(event.target.value);
  }, [store]);

  const handleClick = React.useCallback(() => {
    sessionStorage.setItem('size', store.size);
  }, [store]);

  React.useEffect(() => {
    // componentDidUpdate() lifecycle, this is wehere you normally want to put API calls
    const fetch = sessionStorage.getItem('size');
    store.setSize(fetch ? fetch : store.size);
  }, [store]);

  return (
    <div className={styles.container}>
      <div>
        <h1>Choose pizza size</h1>
        <RadioButton
          value={text.small()}
          isSelected={store.size === text.small()}
          onChange={handleChange}
        >
          <Label text={text.small()}/>
        </RadioButton>
        <RadioButton
          value={text.meduim()}
          isSelected={store.size === text.meduim()}
          onChange={handleChange}
        >
          <Label text={text.meduim()}/>
        </RadioButton>
        <RadioButton
          value={text.large()}
          isSelected={store.size === text.large()}
          onChange={handleChange}
        >
          <Label text={text.large()}/>
        </RadioButton>
        <Link path={{ route: BaseRoute.CRUST }}>
          <button onClick={handleClick}>OK</button>
        </Link>
      </div>
      <div>

      </div>
    </div>
  );
});

export const Size = observer(() => {
  const [store] = React.useState(new PizzaSize(text.large()));
  return <BaseSize store={store} />;
});

