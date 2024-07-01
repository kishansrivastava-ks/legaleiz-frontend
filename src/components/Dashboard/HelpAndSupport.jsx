import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 20px;
  background-color: #f9f9f9;
  /* background-color: red; */
`;

const FormHeader = styled.h2`
  text-align: center;
  color: #333;
  margin-right: auto;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  margin-top: 2rem;
  /* background-color: lightgoldenrodyellow; */
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  width: 100%;
  max-width: 500px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
  font-size: 1.8rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const FormFooter = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 1.2rem;
  color: #666;
  & > span {
    color: #007bff;
  }
`;

const HelpAndSupport = () => {
  return (
    <Container>
      <FormHeader>
        Fill the form below to reach out to us, or connect with us at
      </FormHeader>
      <FormContainer>
        <FormGroup>
          <Label htmlFor="service">Select a Service</Label>
          <Select id="service" name="service">
            <option value="">Choose a service</option>
            <option value="service1">Service 1</option>
            <option value="service2">Service 2</option>
            <option value="service3">Service 3</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="reason">Select a Reason</Label>
          <Select id="reason" name="reason">
            <option value="">Choose a reason</option>
            <option value="reason1">Reason 1</option>
            <option value="reason2">Reason 2</option>
            <option value="reason3">Reason 3</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="issue">Describe the Issue</Label>
          <TextArea
            id="issue"
            name="issue"
            rows="5"
            placeholder="Describe your issue here"
          ></TextArea>
        </FormGroup>
        <SubmitButton type="submit">Send</SubmitButton>
      </FormContainer>
      <FormFooter>
        You can also write to us at <span>support@legaleiz.com</span> with your
        queries.
      </FormFooter>
    </Container>
  );
};

export default HelpAndSupport;
