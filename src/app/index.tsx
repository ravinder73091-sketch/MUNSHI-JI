import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const COLORS = {
  navy: '#14243A',
  gold: '#C9A45C',
  background: '#F5F6F8',
  white: '#FFFFFF',
  text: '#263447',
  muted: '#8792A2',
  border: '#E8EBEF',
};

const actions = [
  { icon: '⚖️', title: 'Case Management', subtitle: 'Manage your cases' },
  { icon: '📝', title: 'Legal Drafting', subtitle: 'Draft legal documents' },
  { icon: '📚', title: 'Bare Acts', subtitle: 'Browse Indian laws' },
  { icon: '🔍', title: 'Case Research', subtitle: 'Find judgments' },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>
          <View>
            <Text style={styles.brand}>MUNSHI JI</Text>
            <Text style={styles.tagline}>YOUR INTELLIGENT LEGAL ASSISTANT</Text>
          </View>

          <TouchableOpacity style={styles.profile}>
            <Text style={styles.profileText}>A</Text>
          </TouchableOpacity>
        </View>

        {/* WELCOME */}
        <View style={styles.welcome}>
          <Text style={styles.greeting}>Good afternoon, Advocate</Text>
          <Text style={styles.welcomeTitle}>
            Your practice.{'\n'}One intelligent workspace.
          </Text>
          <Text style={styles.welcomeSubtitle}>
            Everything you need to manage your legal practice,
            in one place.
          </Text>
        </View>

        {/* SEARCH */}
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>⌕</Text>
          <TextInput
            placeholder="Search cases, laws, judgments..."
            placeholderTextColor={COLORS.muted}
            style={styles.searchInput}
          />
        </View>

        {/* QUICK ACCESS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>QUICK ACCESS</Text>

          <View style={styles.grid}>
            {actions.map((item, index) => (
              <TouchableOpacity key={index} style={styles.actionCard}>
                <Text style={styles.actionIcon}>{item.icon}</Text>
                <Text style={styles.actionTitle}>{item.title}</Text>
                <Text style={styles.actionSubtitle}>
                  {item.subtitle}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* AI ASSISTANT */}
        <View style={styles.aiCard}>
          <View style={styles.aiTop}>
            <Text style={styles.aiIcon}>✦</Text>
            <Text style={styles.aiLabel}>MUNSHI AI</Text>
          </View>

          <Text style={styles.aiTitle}>
            How can I assist you today?
          </Text>

          <Text style={styles.aiDescription}>
            Research a judgment, understand a legal provision,
            or prepare your next draft.
          </Text>

          <TouchableOpacity style={styles.aiButton}>
            <Text style={styles.aiButtonText}>
              Start with Munshi AI  →
            </Text>
          </TouchableOpacity>
        </View>

        {/* RECENT ACTIVITY */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>YOUR WORKSPACE</Text>

          <View style={styles.workspaceCard}>
            <Text style={styles.workspaceIcon}>📁</Text>
            <View style={styles.workspaceInfo}>
              <Text style={styles.workspaceTitle}>My Matters</Text>
              <Text style={styles.workspaceSubtitle}>
                Your cases and legal matters will appear here.
              </Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </View>
        </View>

        {/* FOOTER */}
        <Text style={styles.footer}>
          MUNSHI JI  •  BUILT FOR THE MODERN ADVOCATE
        </Text>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  header: {
    backgroundColor: COLORS.navy,
    paddingTop: 55,
    paddingHorizontal: 24,
    paddingBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  brand: {
    color: COLORS.gold,
    fontSize: 25,
    fontWeight: '900',
    letterSpacing: 3,
  },

  tagline: {
    color: '#D1D9E3',
    fontSize: 9,
    letterSpacing: 1.5,
    marginTop: 5,
  },

  profile: {
    width: 43,
    height: 43,
    borderRadius: 22,
    backgroundColor: COLORS.gold,
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileText: {
    color: COLORS.navy,
    fontSize: 18,
    fontWeight: 'bold',
  },

  welcome: {
    backgroundColor: COLORS.navy,
    paddingHorizontal: 24,
    paddingBottom: 38,
  },

  greeting: {
    color: COLORS.gold,
    fontSize: 14,
    marginBottom: 13,
  },

  welcomeTitle: {
    color: COLORS.white,
    fontSize: 29,
    fontWeight: 'bold',
    lineHeight: 37,
  },

  welcomeSubtitle: {
    color: '#CBD4DF',
    fontSize: 13,
    lineHeight: 21,
    marginTop: 12,
  },

  searchBox: {
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    marginTop: -23,
    height: 55,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    elevation: 3,
  },

  searchIcon: {
    fontSize: 27,
    color: COLORS.gold,
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    fontSize: 13,
    color: COLORS.text,
  },

  section: {
    paddingHorizontal: 20,
    marginTop: 30,
  },

  sectionTitle: {
    color: COLORS.navy,
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    marginBottom: 15,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  actionCard: {
    width: '48%',
    backgroundColor: COLORS.white,
    borderRadius: 13,
    padding: 17,
    marginBottom: 13,
    minHeight: 130,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  actionIcon: {
    fontSize: 25,
    marginBottom: 13,
  },

  actionTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.navy,
  },

  actionSubtitle: {
    fontSize: 10,
    color: COLORS.muted,
    marginTop: 6,
  },

  aiCard: {
    backgroundColor: COLORS.navy,
    marginHorizontal: 20,
    marginTop: 15,
    borderRadius: 16,
    padding: 22,
  },

  aiTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 17,
  },

  aiIcon: {
    color: COLORS.gold,
    fontSize: 22,
    marginRight: 9,
  },

  aiLabel: {
    color: COLORS.gold,
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 2,
  },

  aiTitle: {
    color: COLORS.white,
    fontSize: 21,
    fontWeight: 'bold',
  },

  aiDescription: {
    color: '#C5CFDA',
    fontSize: 12,
    lineHeight: 20,
    marginTop: 10,
  },

  aiButton: {
    backgroundColor: COLORS.gold,
    padding: 14,
    borderRadius: 9,
    marginTop: 20,
    alignItems: 'center',
  },

  aiButtonText: {
    color: COLORS.navy,
    fontWeight: 'bold',
    fontSize: 12,
  },

  workspaceCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 17,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  workspaceIcon: {
    fontSize: 25,
    marginRight: 14,
  },

  workspaceInfo: {
    flex: 1,
  },

  workspaceTitle: {
    color: COLORS.navy,
    fontWeight: 'bold',
    fontSize: 14,
  },

  workspaceSubtitle: {
    color: COLORS.muted,
    fontSize: 10,
    marginTop: 5,
  },

  arrow: {
    fontSize: 25,
    color: COLORS.gold,
  },

  footer: {
    textAlign: 'center',
    color: COLORS.muted,
    fontSize: 9,
    letterSpacing: 1,
    marginTop: 35,
    marginBottom: 30,
  },
});git