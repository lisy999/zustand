import {
  PageContainer,
  ProLayout,
  ProSettings,
} from "@ant-design/pro-components";
import defaultProps from "./_defaultProps";
import { ChromeFilled } from "@ant-design/icons";

const ProLayoutPage = () => {
  const settings: (ProSettings & { logo?: string }) | undefined = {
    fixSiderbar: true,
    layout: "mix",
    splitMenus: true,
  };
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <ProLayout
        {...settings}
        menuItemRender={(item, dom) => {
          console.log(item, "iii");

          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <ChromeFilled /> {dom}
            </div>
          );
        }}
        subMenuItemRender={(item, dom) => {
          console.log(item, "item2");

          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <ChromeFilled /> {dom}
            </div>
          );
        }}
        title="Remax"
        logo="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ"
        menuHeaderRender={(logo, title) => (
          <div
            id="customize_menu_header"
            style={{
              height: "32px",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
            onClick={() => {
              window.open("https://remaxjs.org/");
            }}
          >
            {logo}
            {title}
          </div>
        )}
        {...defaultProps}
        location={{
          pathname: "/welcome",
        }}
      >
        <PageContainer content="欢迎使用">Hello World</PageContainer>
      </ProLayout>
    </div>
  );
};
export default ProLayoutPage;
