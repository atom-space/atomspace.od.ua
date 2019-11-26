import React from 'react';
import cn from 'classnames';
import Toggle from '../../Toggle';
import { useTranslation } from 'react-i18next';

const FormRegister = ({ inputData, user, handleInputUser }) => {
  const { t } = useTranslation();
  return (
    <>
      {inputData.map(data => (
        <div className={`${data.id}-block`} key={data.id}>
          <input
            className={cn({
              error: user[data.id].error,
              'atom-toggle__hide': data.type === 'checkbox',
            })}
            id={data.id}
            type={data.type}
            placeholder={data.placeholder}
            value={user[data.id].value}
            onChange={handleInputUser.bind(this, data)}
            onBlur={handleInputUser.bind(this, data)}
          />
        </div>
      ))}
      <Toggle value={t('form.toggle')} />
    </>
  );
};

export default FormRegister;
