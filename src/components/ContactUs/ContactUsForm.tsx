import { Col, Input, Row, Select, Space, Typography } from "antd";
import Image from "next/image";
import styled from "styled-components";

const { Title } = Typography;

const FullScreenWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 48px 150px 48px;

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

  .q1 {
    margin-right: -36px;
  }

  .topic {
    width: 100%;
  }

  @media (max-width: 1180px) {
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

    .q1 {
      width: 150px;
      height: 150px;
      margin-right: -24px;
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
  height: 100%;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  width: 100%;

  @media (max-width: 960px) {
    flex-direction: column;

    .qr-code {
      flex-direction: row;
    }
  }

  @media (max-width: 576px) {
    .map {
      width: 350px;
      height: 300px;
    }

    .qr-code > div > img {
      width: 120px;
      height: 120px;
    }
  }
`;

const Paper = styled.div`
  width: 100%;
  padding: 16px;
  background-color: #fff;
  border-radius: 12px;
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
                src="/icons/icon-q1.png"
                width={220}
                height={220}
                alt=""
                className="q1"
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
              <Space direction="vertical" size={32} className="qr-code">
                <Image
                  src="/icons/icon-qr-green.png"
                  alt="thongpaisal"
                  width={170}
                  height={170}
                />
                <Image
                  src="/icons/icon-qr-gray.png"
                  alt="thongpaisal"
                  width={170}
                  height={170}
                />
              </Space>
            </Box>
          </Col>
          <Col xl={10} lg={24} sm={24} xs={24}>
            <Title level={1}>ให้เราได้ดูแลคุณ</Title>
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
          </Col>
        </Row>
      </Content>
    </FullScreenWrapper>
  );
}
