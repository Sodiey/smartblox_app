import React, { useState } from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SwitcherItem,
  SwitcherDivider,
  SkipToContent,
  SideNav,
  HeaderPanel,
  SideNavItems,
  HeaderSideNavItems,
  Dropdown,
  Switcher,
} from 'carbon-components-react';
//ICONS
import { Language32, Notification20, UserAvatar20 } from '@carbon/icons-react';

//i18next
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
//REDUX
import { connect } from 'react-redux';
import { openAlert } from 'store/alert/alert.actions';

const CustomHeader = ({ onOpenAlert }) => {
  const [isExpanded, setIsExpaned] = useState(false);
  const [language, setLanguage] = useState(i18n.language);
  const { t } = useTranslation();

  const handleLanguage = (lang) => {
    if (lang === language) return;
    i18n.changeLanguage(lang);
    setLanguage(lang);
    setIsExpaned(false);
    onOpenAlert({ type: 'language', severity: 'info', lang });
  };

  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="Carbon Tutorial">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <HeaderName href="/" prefix="#">
            Translate it
          </HeaderName>
          <HeaderNavigation aria-label="Carbon Tutorial">
            <HeaderMenuItem href="/repos">Translations</HeaderMenuItem>
          </HeaderNavigation>
          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}
          >
            <SideNavItems>
              <HeaderSideNavItems>
                <HeaderMenuItem href="/repos">Translations</HeaderMenuItem>
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
          <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Notifications">
              <Notification20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="User Avatar">
              <UserAvatar20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              onClick={() => setIsExpaned((prev) => !prev)}
              aria-label="App Switcher"
            >
              <Language32 />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
          <HeaderPanel aria-label="Header Panel" expanded={isExpanded}>
            <Switcher aria-label="Switcher Container">
              <SwitcherItem aria-label="Link 1">Languages</SwitcherItem>
              <SwitcherDivider />
              <SwitcherItem
                isSelected={language === 'en'}
                aria-label="English"
                onClick={handleLanguage.bind(this, 'en')}
              >
                EN
              </SwitcherItem>
              <SwitcherItem
                isSelected={language === 'nl'}
                aria-label="Dutch"
                onClick={handleLanguage.bind(this, 'nl')}
              >
                NL
              </SwitcherItem>
            </Switcher>
          </HeaderPanel>
        </Header>
      )}
    />
  );
};

const mapStateToProps = (state) => ({
  alert: state.alert,
});

const mapDispatchToProps = (dispatch) => ({
  onOpenAlert: (type, everity) => dispatch(openAlert(type, everity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomHeader);
