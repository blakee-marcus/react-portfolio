import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import type { CSSProperties } from 'react';

export type DepositConfirmationEmailProps = {
  fullName: string;
  packageName: string;
  amountLabel: string;
  intakeFormUrl: string;
  kickoffBookingUrl: string;
  supportEmail: string;
};

const colors = {
  background: '#f7f4ee',
  panel: '#fffdf8',
  ink: '#26231f',
  muted: '#6f6860',
  line: '#ddd4c7',
  accent: '#5f7f67',
};

const bodyStyle: CSSProperties = {
  margin: 0,
  backgroundColor: colors.background,
  color: colors.ink,
  fontFamily: 'Arial, sans-serif',
};

const containerStyle: CSSProperties = {
  margin: '0 auto',
  maxWidth: '560px',
  padding: '40px 20px',
};

const panelStyle: CSSProperties = {
  backgroundColor: colors.panel,
  border: `1px solid ${colors.line}`,
  borderRadius: '18px',
  padding: '28px',
};

const eyebrowStyle: CSSProperties = {
  color: colors.accent,
  fontSize: '12px',
  fontWeight: 700,
  letterSpacing: '0.16em',
  margin: '0 0 14px',
  textTransform: 'uppercase',
};

const headingStyle: CSSProperties = {
  color: colors.ink,
  fontSize: '28px',
  lineHeight: '1.05',
  margin: '0 0 20px',
};

const textStyle: CSSProperties = {
  color: colors.muted,
  fontSize: '15px',
  lineHeight: '1.7',
  margin: '0 0 16px',
};

const linkStyle: CSSProperties = {
  color: colors.accent,
  fontWeight: 700,
  textDecoration: 'underline',
};

function getFirstName(fullName: string) {
  return fullName.trim().split(/\s+/)[0] || 'there';
}

export default function DepositConfirmationEmail({
  fullName,
  packageName,
  amountLabel,
  intakeFormUrl,
  kickoffBookingUrl,
  supportEmail,
}: DepositConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Your deposit is confirmed. Intake and kickoff are ready.</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          <Section style={panelStyle}>
            <Text style={eyebrowStyle}>Blake Marcus Studio</Text>
            <Heading style={headingStyle}>Your deposit is confirmed.</Heading>
            <Text style={textStyle}>Hi {getFirstName(fullName)},</Text>
            <Text style={textStyle}>
              Stripe confirmed your {amountLabel} deposit for the {packageName} package. The
              deposit is applied to your project total, and your project can now move into intake
              and kickoff.
            </Text>
            <Hr style={{ borderColor: colors.line, margin: '24px 0' }} />
            <Text style={textStyle}>
              <strong>Next step:</strong>{' '}
              <Link href={intakeFormUrl} style={linkStyle}>
                complete the intake form
              </Link>
              .
            </Text>
            <Text style={textStyle}>
              After intake,{' '}
              <Link href={kickoffBookingUrl} style={linkStyle}>
                book the kickoff call
              </Link>{' '}
              so the working plan can be confirmed.
            </Text>
            <Text style={{ ...textStyle, marginBottom: 0 }}>
              If either link gives you trouble, reply to this email or write to{' '}
              <Link href={`mailto:${supportEmail}`} style={linkStyle}>
                {supportEmail}
              </Link>
              .
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
