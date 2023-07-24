import { BOOKMARKS_PATH, STUDIES_PATH, TEMPLATES_PATH } from "@/utils/routes";
import styles from "@/styles/components/MainHeader.module.sass";
import { generateID } from "@/hooks/useId";
import Navigation from "@/components/common/Navigation";

function GNB() {
  const gnbItems = [
    { label: "스터디", route: STUDIES_PATH },
    { label: "템플릿", route: TEMPLATES_PATH },
    { label: "북마크", route: BOOKMARKS_PATH },
  ];

  return (
    <Navigation aria-label="global-navigation-bar" className={styles.gnb}>
      {gnbItems.map(item => (
        <Navigation.Item key={generateID("studium-gnb")} route={item.route}>
          {item.label}
        </Navigation.Item>
      ))}
    </Navigation>
  );
}

export default GNB;
