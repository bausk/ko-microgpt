# microgpt model (Korean Name Generator)

A Korean name generation model based on a modified version of Karpathy's microgpt.
Training is handled by `model/ko_main.py`, while inference-only execution is separated into `model/ko_inference.py`.

## Data Source

This project is based on birth registration data collected from [yiunsr.tistory.com/885](https://yiunsr.tistory.com/885).

## Directory Structure

- `model/ko_main.py`: Load data → Train → Save checkpoint → Sample inference
- `model/ko_inference.py`: Load saved checkpoint and perform inference only
- `model/data/ko_name.txt`: Training data
- `model/data/en_name.txt`: English training data
- `model/checkpoints/ko_model.pkl`: Model checkpoint saved after training
- `model/checkpoints/en_model.pkl`: English model checkpoint saved after training
- `model/scripts/export_embedding_snapshot.py`: Export checkpoint as frontend visualization JSON
- `model/scripts/export_training_trace.py`: Export Adam training trace JSON for Chapter 6
- `model/scripts/generate_en_assets.py`: Download English dataset (if needed) + train English model + export English snapshot/trace

## Usage

The commands below are based on the repository root (`/Users/jjy37/Documents/GitHub/microgpt`).

### 1) Run Training + Sample Inference

```bash
python3 model/ko_main.py
```

Execution order:

1. Load and filter Korean names from `model/data/ko_name.txt`
2. Train the model
3. Save to `model/checkpoints/ko_model.pkl`
4. Print sample name generation results

### 2) Run Inference Only

```bash
python3 model/ko_inference.py
```

When a checkpoint already exists, you can check name generation results without training.

### 3) Generate Frontend Visualization Snapshot

```bash
python3 model/scripts/export_embedding_snapshot.py
```

Output file:

- `app/public/data/ko_embedding_snapshot.json`

### 4) Generate Chapter 6 Training Trace

```bash
python3 model/scripts/export_training_trace.py
```

Output file:

- `app/public/data/ko_training_trace.json`

### 5) Generate All English Data

```bash
python3 model/scripts/generate_en_assets.py
```

Output files:

- `model/data/en_name.txt` (auto-downloaded if missing)
- `model/checkpoints/en_model.pkl`
- `app/public/data/en_name.txt`
- `app/public/data/en_embedding_snapshot.json`
- `app/public/data/en_training_trace.json`
