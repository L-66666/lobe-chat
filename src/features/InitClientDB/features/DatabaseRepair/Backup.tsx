import { Alert } from '@lobehub/ui';
import { Button, Card, Typography } from 'antd';
import { createStyles } from 'antd-style';
import { AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

const { Text, Paragraph } = Typography;

const useStyles = createStyles(({ css, token }) => ({
  card: css`
    border-radius: ${token.borderRadiusLG}px;
  `,
}));

const Backup = () => {
  const { t } = useTranslation('common');
  const { styles } = useStyles();

  return (
    <Flexbox gap={24}>
      <Card
        className={styles.card}
        extra={<Text type="secondary">{t('clientDB.solve.backup.desc')}</Text>}
        title={t('clientDB.solve.backup.title')}
      >
        <Paragraph>{t('clientDB.solve.backup.exportDesc')}</Paragraph>
        <Button block type={'primary'}>
          {t('clientDB.solve.backup.export')}
        </Button>
      </Card>

      <Card
        className={styles.card}
        extra={<Text type="secondary">{t('clientDB.solve.backup.reset.desc')}</Text>}
        title={t('clientDB.solve.backup.reset.title')}
      >
        <Flexbox gap={24}>
          <Alert
            description={t('clientDB.solve.backup.reset.alertDesc')}
            icon={<AlertCircle size={16} />}
            message={t('clientDB.solve.backup.reset.alert')}
            showIcon
            type="error"
            variant={'pure'}
          />

          <Button block danger>
            {t('clientDB.solve.backup.reset.button')}
          </Button>
        </Flexbox>
      </Card>
    </Flexbox>
  );
};

export default Backup;
