import React from 'react';
import Button from '../button/button';
import { useStateValue } from '../state-provider/state-provider';

const ThemedButton = () => {
    const [{ theme }, dispatch] = useStateValue();
    return (
      <Button
        primaryColor={theme.primary}
        onClick={() => dispatch({
          type: 'changeTheme',
          newTheme: { primary: 'blue'}
        })}
      >
        Make me blue!
      </Button>
    );
}

export default ThemedButton;