import { Col, Input, Row, Select, Space, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const { Title } = Typography;

const FullScreenWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 32px 150px 32px;

  .title {
    font-size: 5rem;
    font-weight: bold;
    white-space: pre;
  }

  .subtitle {
    font-size: 3.5rem;
    font-weight: bold;
    white-space: pre;
  }

  .body {
    font-weight: 400;
  }

  .tps {
    margin-right: 16px;
  }

  .topic {
    width: 100%;
  }

  @media (max-width: 1340px) {
    padding: 32px 80px 32px;
  }

  @media (max-width: 1200px) {
    height: 100%;
  }

  @media (max-width: 768px) {
    padding: 36px;
  }

  @media (max-width: 960px) {
    .title {
      font-size: 3rem;
      white-space: normal;
    }

    .subtitle {
      font-size: 1.5rem;
      white-space: normal;
    }

    .body {
      font-size: 1rem;
    }

    .topic {
      justify-content: center;
    }
  }

  @media (max-width: 576px) {
    .title {
      white-space: pre;
    }

    .subtitle {
      white-space: pre;
    }

    .tps {
      width: 150px;
      height: 150px;
    }

    .thai {
      display: none;
    }
  }
`;

const BackgroundImage = styled(Image)`
  object-fit: cover;
  z-index: -1;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1200px) {
    height: 200vh;
    justify-content: flex-start;
  }

  @media (max-width: 960px) {
    height: 220vh;
  }

  @media (max-width: 576px) {
    height: 180vh;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  width: 100%;

  .add-line > div:last-child > a > img {
    height: 80px;
    object-fit: cover;
  }

  @media (max-width: 960px) {
    flex-direction: column;

    .add-line {
      flex-direction: row;
      align-items: center;
    }
  }

  @media (max-width: 576px) {
    .map {
      width: 350px;
      height: 300px;
    }
  }
`;

const Paper = styled.div<{ type?: string }>`
  width: 100%;
  padding: 16px;
  background-color: #fff;
  border-radius: 12px;
  overflow: auto;
  margin-bottom: 16px;

  height: ${({ type }) => (type === "map" ? "40%" : "auto")};

  @media (max-width: 1200px) {
    height: ${({ type }) => (type === "map" ? "60%" : "auto")};
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;

const SelectContainer = styled(Select)`
  width: 100%;
`;

const Button = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f76a12;
  border-radius: 8px;
  height: 40px;

  .ant-typography {
    color: #fff !important;
  }
`;

export default function ContactUsForm() {
  return (
    <FullScreenWrapper>
      <BackgroundImage
        src="/images/image-contact-us-form.png"
        alt="thongpaisal"
        fill
        priority
      />
      <Content>
        <Row gutter={[32, 32]}>
          <Col xl={14} lg={24} sm={24} xs={24}>
            <Space size={0} className="topic">
              <Image
                src="/icons/icon-tps.png"
                width={180}
                height={180}
                alt=""
                className="tps"
              />
              <Space direction="vertical" size={16}>
                <Space direction="vertical" size={0}>
                  <Title className="title">ติดต่อเรา</Title>
                  <Title className="subtitle">CONTACT US</Title>
                </Space>
                <Space style={{ height: "24px" }}>
                  <Title level={2} className="body">
                    เรามีฝ่ายขายดูแลลูกค้าทั่วประเทศ
                  </Title>
                  <Image
                    src="/icons/icon-thai-flag.png"
                    width={80}
                    height={80}
                    alt=""
                    className="thai"
                  />
                </Space>
              </Space>
            </Space>
            <Box>
              <Image
                src="/images/image-contact-us-form-map.png"
                alt="thongpaisal"
                width={500}
                height={450}
                className="map"
              />
              <Space direction="vertical" className="add-line">
                <Image
                  src="/icons/icon-cartoon.png"
                  alt="thongpaisal"
                  width={170}
                  height={170}
                />
                <Link
                  href="https://line.me/R/ti/p/@bigtothai"
                  passHref
                  target="_blank"
                >
                  <Image
                    src="/icons/icon-add-line.png"
                    alt="thongpaisal"
                    width={200}
                    height={80}
                  />
                </Link>
              </Space>
            </Box>
          </Col>
          <Col xl={10} lg={24} sm={24} xs={24}>
            <Title level={2}>ให้เราได้ดูแลคุณ</Title>
            <Paper>
              <Form>
                <Space direction="vertical" size={4}>
                  <Typography>ชื่อ-สกุล</Typography>
                  <Input type="text" placeholder="กรอกชื่อ-สกุล" />
                </Space>
                <Space direction="vertical" size={4}>
                  <Typography>อีเมล์</Typography>
                  <Input type="text" placeholder="กรอกอีเมล์" />
                </Space>
                <Space direction="vertical" size={4}>
                  <Typography>วัตถุประสงค์</Typography>
                  <SelectContainer placeholder="เลือกวัตถุประสงค์">
                    <Select.Option key="1" value="สอบถามข้อมูลสินค้า">
                      สอบถามข้อมูลสินค้า
                    </Select.Option>
                    <Select.Option key="2" value="ขอใบเสนอราคา">
                      ขอใบเสนอราคา
                    </Select.Option>
                    <Select.Option
                      key="3"
                      value="ติดต่อเพื่อเป็นคู่ค้า / ตัวแทนจำหน่าย"
                    >
                      ติดต่อเพื่อเป็นคู่ค้า / ตัวแทนจำหน่าย
                    </Select.Option>
                    <Select.Option
                      key="4"
                      value="แจ้งปัญหาการใช้งาน / ขอความช่วยเหลือ"
                    >
                      แจ้งปัญหาการใช้งาน / ขอความช่วยเหลือ
                    </Select.Option>
                    <Select.Option key="5" value="อื่นๆ">
                      อื่นๆ(โปรดระบุในข้อความเพิ่มเติม)
                    </Select.Option>
                  </SelectContainer>
                </Space>
                <Space direction="vertical" size={4}>
                  <Typography>ข้อความเพิ่มเติม</Typography>
                  <Input.TextArea rows={2} placeholder="กรอข้อความเพิ่มเติม" />
                </Space>
                <Button>
                  <Title level={5}>ส่งฟอร์ม</Title>
                </Button>
              </Form>
            </Paper>
            <Paper type="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.7667584319775!2d100.42297640000001!3d13.611052499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2bd136dbdb669%3A0x12b6f382d1b0a7ea!2z4Lic4Lil4Li04LiV4LmB4Lil4Liw4LiI4Liz4Lir4LiZ4LmI4Liy4Lii4Lit4Liw4LmE4Lir4Lil4LmI4Lij4LiW4Lia4Lij4Lij4LiX4Li44LiBLeC4l-C4reC4h-C5hOC4nuC4qOC4suC4pShCSUdUTyk!5e0!3m2!1sth!2sth!4v1744288051745!5m2!1sth!2sth"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "0",
                }}
              />
            </Paper>
          </Col>
        </Row>
      </Content>
    </FullScreenWrapper>
  );
}
