import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import type { CSSProperties } from 'react';

export type NewPaidDepositEmailProps = {
  fullName: string;
  clientEmail: string;
  businessName: string;
  packageName: string;
  amountLabel: string;
  publicId: string;
  checkoutSessionId: string | null;
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
  margin: '0 0 14px',
};

const labelStyle: CSSProperties = {
  color: colors.accent,
  fontSize: '12px',
  fontWeight: 700,
  letterSpacing: '0.12em',
  margin: '18px 0 4px',
  textTransform: 'uppercase',
};

export default function NewPaidDepositEmail({
  fullName,
  clientEmail,
  businessName,
  packageName,
  amountLabel,
  publicId,
  checkoutSessionId,
}: NewPaidDepositEmailProps) {
  const details = [
    ['Client', fullName],
    ['Email', clientEmail],
    ['Business', businessName],
    ['Package', packageName],
    ['Amount', amountLabel],
    ['Public ID', publicId],
    ['Stripe session', checkoutSessionId ?? 'Not recorded'],
  ] as const;

  return (
    <Html>
      <Head />
      <Preview>New paid deposit from {businessName}</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          <Section style={panelStyle}>
            <Text style={labelStyle}>Paid deposit</Text>
            <Heading style={headingStyle}>A new project deposit came in.</Heading>
            <Text style={textStyle}>
              The deposit is paid and the client has access to intake, kickoff, and onboarding.
            </Text>
            <Hr style={{ borderColor: colors.line, margin: '24px 0' }} />
            {details.map(([label, value]) => (
              <Section key={label}>
                <Text style={labelStyle}>{label}</Text>
                <Text style={textStyle}>{value}</Text>
              </Section>
            ))}
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
