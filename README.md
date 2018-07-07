# NMT - The code is modified by shkey

> A NMT project with a simple Web interface for German to English and English to German.

## download the models

**you can download the model at the following urls**

- WMT German-English
  - [model1](http://download.tensorflow.org/models/nmt/deen_model_1.zip)
  - [model2](http://download.tensorflow.org/models/nmt/deen_model_2.zip)
  - [model_4_layer](http://download.tensorflow.org/models/nmt/10122017/deen_gnmt_model_4_layer.zip)
- WMT English-German
  - [model1(4 layers)](http://download.tensorflow.org/models/nmt/10122017/ende_gnmt_model_4_layer.zip)
  - [model2(8 layers)](http://download.tensorflow.org/models/nmt/10122017/ende_gnmt_model_8_layer.zip)
- download WMT16 German-English data
  - [wmt16](http://pav3a2nvk.bkt.gdipper.com/wmt16.tar.gz)
- download and unzip all the models to a right path, we will use the models in CLI next.


## how to use tf-nmt server

- copy nmt folder to `/` and make it be `/nmt`
- copy folders WMT-English-German, WMT-German-English, wmt16 to the `/data` of container

- run `cd nmt`

> the following code must be run in the NMT folder
> and make sure to replace the sample path by your actual path

- to start entode_server

```bash
python3 -m nmt.entode_server \
  --src=en --tgt=de \
  --ckpt=/data/WMT-English-German/ende_gnmt_model_4_layer/translate.ckpt \
  --hparams_path=nmt/standard_hparams/wmt16_gnmt_4_layer.json \
  --out_dir=/tmp/ende_gnmt \
  --vocab_prefix=/data/wmt16/vocab.bpe.32000
```

- to start detoen_server

```bash
python3 -m nmt.detoen_server \
  --src=de --tgt=en \
  --ckpt=/data/WMT-German-English/deen_model_1/translate.ckpt \
  --hparams_path=nmt/standard_hparams/wmt16.json \
  --out_dir=/tmp/deen \
  --vocab_prefix=/data/wmt16/vocab.bpe.32000
```

## how to start Django Web Server

- first `cd translation`
- then you can run `python3 manage.py runserver` to start debug server
- if you want to use nginx or uwsgi to start the Django project, you can try it yourselves
