import React from 'react';
import styles from './topping.module.css';
import text from './topping_text';
import { observer } from 'mobx-react';
import { CheckboxInput } from '../../ui/components/input_checkbox/input_checkbox';
import { BooleanStore } from '../../ui/base/generic_store/generic_store';
import { Ingredients, ToppingStore } from './topping_store';
import { BaseRoute } from '../../ui/routes/paths';
import { Link } from '../../ui/base/link/link';
import { ButtonClickEvent } from '../../ui/types/events';

type PickerProps = {
  label: string;
  store: BooleanStore;
  imgStyle: string;
};

const Picker = observer(({ label, store, imgStyle }: PickerProps) => {
  const toggleStore = React.useCallback(() => {
    store.value = !store.value;
  }, [store]);

  return (
    <div className={styles.inputRow}>
      <div onClick={toggleStore}>
        <div className={imgStyle}/>
      </div>
      <div className={styles.inputLabel} onClick={toggleStore}>
        {label}
      </div>
      <CheckboxInput store={store}/>
    </div>
  );
});

type BaseToppingProps = {
  store: ToppingStore;
};

const BaseTopping = observer(({ store }: BaseToppingProps) => {
  const handleOk = React.useCallback((event: ButtonClickEvent) => {
    event.stopPropagation();
    store.commitWorkspace();
    sessionStorage.setItem('toppings', store.arrayValue.join(', '));
  }, [store]);

  React.useEffect(() => {
    // TODO: temporarily store and fetch/rehydrate locally

    // const fetch = sessionStorage.getItem('toppings');
    // const data = fetch ? fetch.split(' ') : [];


  }, [store, fetch]);

  return (
    <div className={styles.container}>
      <div>
        <h1>{text.header()}</h1>
        <div className={styles.pickerContainer}>
          <Picker
            label={text.bacon()}
            store={store.workspace[Ingredients.BACON]}
            imgStyle={styles.bacon}
          />
          <Picker
            label={text.blackOlives()}
            store={store.workspace[Ingredients.BLACK_OLIVES]}
            imgStyle={styles.blackOlive}
          />
          <Picker
            label={text.extraCheese()}
            store={store.workspace[Ingredients.EXTRA_CHEESE]}
            imgStyle={styles.cheese}
          />
          <Picker
            label={text.greenPeppers()}
            store={store.workspace[Ingredients.GREEN_PEPPERS]}
            imgStyle={styles.greenPepper}
          />
          <Picker
            label={text.mushrooms()}
            store={store.workspace[Ingredients.MUSHROOMS]}
            imgStyle={styles.mushroom}
          />
          <Picker
            label={text.onions()}
            store={store.workspace[Ingredients.ONIONS]}
            imgStyle={styles.onion}
          />
          <Picker
            label={text.pepperoni()}
            store={store.workspace[Ingredients.PEPPERONI]}
            imgStyle={styles.pepperoni}
          />
          <Picker
            label={text.pineapple()}
            store={store.workspace[Ingredients.PINEAPPLE]}
            imgStyle={styles.pineapple}
          />
          <Picker
            label={text.sausage()}
            store={store.workspace[Ingredients.SAUSAGE]}
            imgStyle={styles.sausage}
          />
          <Picker
            label={text.spinach()}
            store={store.workspace[Ingredients.SPINACH]}
            imgStyle={styles.spinach}
          />
        </div>
        <Link path={{ route: BaseRoute.CUSTOM }}>
          <button onClick={handleOk}>OK</button>
        </Link>
      </div>
    </div>
  );
});

export const Topping = observer(() => {
  const [store] = React.useState(new ToppingStore());
  return <BaseTopping store={store}/>;
});