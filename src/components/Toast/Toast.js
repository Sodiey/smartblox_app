import React from 'react';
import { ToastNotification } from 'carbon-components-react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const Toast = () => {
  const { t } = useTranslation();
  const { type, severity, lang } = useSelector((state) => state.alert);
  const getLanguage = () => (lang === 'en' ? 'English' : 'Nederlands');

  return (
    <div className="tost-absolute">
      <ToastNotification
        style={{ minWidth: '100%' }}
        // on={false}
        kind={severity}
        iconDescription="describes the close button"
        subtitle={
          <span>
            {' '}
            {t(`alerts.${type}.message`)}
            {lang && getLanguage()}
          </span>
        }
        timeout={0}
        title={t(`alerts.${type}.title`)}
        caption=""
      />
    </div>
  );
};

export default Toast;
