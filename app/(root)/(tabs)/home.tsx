import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { Link } from 'expo-router'
import { SafeAreaView, Text, View } from 'react-native'
import { WebView } from 'react-native-webview'

export default function Page() {
  const { user } = useUser()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
        {/* WebView to load Chatling chatbot */}
        <WebView
          source={{
            html: `
              <html>
                <head>
                  <script>
                    window.chtlConfig = { chatbotId: "2875817666" };
                  </script>
                  <script async data-id="2875817666" id="chatling-embed-script" type="text/javascript" src="https://chatling.ai/js/embed.js"></script>
                </head>
                <body>
                  <!-- Chatling will appear here -->
                </body>
              </html>
            `,
          }}
          style={{ flex: 1, marginTop: 20 }}
        />
      </SignedIn>
      <SignedOut>
        <Link href="/sign-in">
          <Text>Sign In</Text>
        </Link>
        <Link href="/sign-up">
          <Text>Sign Up</Text>
        </Link>
      </SignedOut>
    </SafeAreaView>
  )
}
