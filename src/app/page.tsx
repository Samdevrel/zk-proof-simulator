'use client';

import { useState } from 'react';

interface Witness {
  proverData: number;
  verifierInput: number;
  proverProof: number;
}

const exampleScenario: Witness = {
  proverData: 42,
  verifierInput: 7,
  proverProof: 135,
};

const explanationSteps = [
  {
    step: 1,
    title: 'Prover has private data',
    desc: 'Prover knows a secret value (42) they want to prove they possess',
    icon: '🔒',
  },
  {
    step: 2,
    title: 'Prover computes ZK proof',
    desc: 'Prover performs computation: 42 × 7 = 294, then creates a proof (135)',
    icon: '🧮',
  },
  {
    step: 3,
    title: 'Verifier asks challenge',
    desc: 'Verifier sends random challenge: 7',
    icon: '❓',
  },
  {
    step: 4,
    title: 'Proof verification',
    desc: 'Verifier checks: 42 × 7 × 135 = 39690. If valid, they accept the proof',
    icon: '✅',
  },
];

const zkTypes = [
  {
    name: 'zkSNARK',
    desc: 'Zero-Knowledge Succinct Non-interactive Argument of Knowledge',
    features: ['Succinct (seconds)', 'Arguments not proofs', 'Transparent setup'],
  },
  {
    name: 'zkSTARK',
    desc: 'Zero-Knowledge Scalable Transparent Argument of Knowledge',
    features: ['Scalable (linear)', 'Transparent setup', 'Post-quantum safe'],
  },
  {
    name: 'zkVM',
    desc: 'Zero-Knowledge Virtual Machine',
    features: ['Prove any program', 'Verified computation', 'Reusable'],
  },
];

export default function Home() {
  const [selectedType, setSelectedType] = useState(0);
  const [verified, setVerified] = useState(false);

  const handleVerify = () => {
    // Simulate verification
    const isValid = Math.random() > 0.3; // 70% chance success
    setVerified(isValid);
  };

  const handleReset = () => {
    setVerified(false);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <header className="border-b-4 border-purple-400 bg-gray-900 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black">ZK Proof Simulator</h1>
          <p className="text-gray-400 mt-2">Understand zero-knowledge proofs interactively</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-900 border-4 border-purple-400 p-4 text-center">
            <div className="text-3xl font-black text-purple-400">0s</div>
            <div className="text-sm text-gray-400">Verification Time</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">2KB</div>
            <div className="text-sm text-gray-400">Proof Size</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black text-green-400">70%</div>
            <div className="text-sm text-gray-400">Privacy Preserved</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">∞</div>
            <div className="text-sm text-gray-400">Reusable</div>
          </div>
        </section>

        {/* ZK Types */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">ZK Proof Types</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {zkTypes.map((type, idx) => (
              <div
                key={type.name}
                onClick={() => setSelectedType(idx)}
                className={`p-4 border-4 cursor-pointer transition-all ${
                  selectedType === idx
                    ? 'bg-purple-900/30 border-purple-400'
                    : 'bg-gray-800 border-gray-600 hover:border-gray-500'
                }`}
              >
                <div className="font-bold text-purple-400 text-lg mb-2">{type.name}</div>
                <div className="text-sm text-gray-400 mb-3">{type.desc}</div>
                <ul className="space-y-1 text-xs text-gray-500">
                  {type.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Simulation */}
        <section className="bg-gray-900 border-4 border-purple-400 p-6">
          <h2 className="text-xl font-black text-purple-400 mb-4">Interactive Simulation</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Prover Side */}
            <div className="space-y-4">
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400 mb-1">Step 1: Prover has private data</div>
                <div className="text-2xl font-bold text-purple-400">Secret: {exampleScenario.proverData}</div>
                <div className="text-xs text-gray-500 mt-2">This value stays hidden from verifier</div>
              </div>

              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400 mb-1">Step 2: Prover computes ZK proof</div>
                <div className="text-2xl font-bold text-purple-400">Proof: {exampleScenario.proverProof}</div>
                <div className="text-xs text-gray-500 mt-2">Compact proof of correctness</div>
              </div>

              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400 mb-1">Step 3: Prover sends proof to verifier</div>
                <div className="text-2xl font-bold text-green-400">→ Send {exampleScenario.proverProof}</div>
                <div className="text-xs text-gray-500 mt-2">No private data revealed</div>
              </div>
            </div>

            {/* Verifier Side */}
            <div className="space-y-4">
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400 mb-1">Step 4: Verifier asks challenge</div>
                <div className="text-2xl font-bold text-yellow-400">Challenge: {exampleScenario.verifierInput}</div>
                <div className="text-xs text-gray-500 mt-2">Random challenge (secret + proof)</div>
              </div>

              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400 mb-1">Step 5: Verifier computes expected value</div>
                <div className="text-2xl font-bold text-cyan-400">
                  {exampleScenario.proverData} × {exampleScenario.verifierInput} × {exampleScenario.proverProof} = {exampleScenario.proverData * exampleScenario.verifierInput * exampleScenario.proverProof}
                </div>
                <div className="text-xs text-gray-500 mt-2">Expected: 39690</div>
              </div>

              <button
                onClick={handleVerify}
                className="w-full py-4 bg-purple-500 text-white font-bold border-4 border-purple-400 hover:bg-purple-400"
              >
                {verified ? 'Verification Complete! ✅' : 'Run Verification Test'}
              </button>

              {verified && (
                <div className="p-4 bg-green-900/30 border-2 border-green-400">
                  <div className="text-lg font-bold text-green-400 mb-2">✅ Valid Proof Accepted</div>
                  <div className="text-sm text-gray-400">
                    Prover proves: "I know x such that x × 7 = 135 × x × 7 = 294 × x = proof"
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Step by Step */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">How ZK Proofs Work</h2>
          <div className="space-y-4">
            {explanationSteps.map((step) => (
              <div key={step.step} className="p-4 bg-gray-800 border border-gray-700 flex gap-4">
                <div className="text-4xl">{step.icon}</div>
                <div>
                  <div className="font-bold text-purple-400 mb-1">
                    Step {step.step}: {step.title}
                  </div>
                  <div className="text-sm text-gray-400">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Privacy vs Verification */}
        <section className="bg-gray-900 border-4 border-green-400 p-6">
          <h2 className="text-xl font-black text-green-400 mb-4">Privacy vs Verification</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-800 border border-gray-700">
              <div className="text-2xl mb-2">🔒 Privacy Preserved</div>
              <p className="text-sm text-gray-400">
                Verifier knows the statement is true, but not the private data used to prove it.
              </p>
            </div>
            <div className="p-4 bg-gray-800 border border-gray-700">
              <div className="text-2xl mb-2">✅ Verification Guaranteed</div>
              <p className="text-sm text-gray-400">
                No cheating: proofs are mathematically guaranteed to be valid.
              </p>
            </div>
          </div>
        </section>

        {/* Real-World Use Cases */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">Real-World Use Cases</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-800 border border-gray-700">
              <div className="font-bold text-purple-400 mb-2">Identity</div>
              <p className="text-sm text-gray-400">
                World agentkit verifies humans behind AI without storing data
              </p>
            </div>
            <div className="p-4 bg-gray-800 border border-gray-700">
              <div className="font-bold text-purple-400 mb-2">Scaling</div>
              <p className="text-sm text-gray-400">
                zkRollups reduce gas fees by proving transaction batches
              </p>
            </div>
            <div className="p-4 bg-gray-800 border border-gray-700">
              <div className="font-bold text-purple-400 mb-2">Privacy</div>
              <p className="text-sm text-gray-400">
                Zcash hides sender, receiver, and transaction amount
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm py-8 border-t border-gray-800">
          <p>
            Built by <a href="https://x.com/samdevrel" className="text-purple-400 hover:underline">@samdevrel</a>
          </p>
        </footer>
      </div>
    </main>
  );
}
